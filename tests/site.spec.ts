import { test, expect } from "@playwright/test";
test("desktop: conteúdo, serviços aprovados, FAQ e links comerciais", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "SEGURANÇA.",
  );
  await expect(page.locator(".service-card")).toHaveCount(3);
  await expect(
    page.getByRole("heading", { name: "Controle de acesso", exact: true }),
  ).toHaveCount(0);
  await expect(page.locator(".intro")).toHaveCount(0, { timeout: 5000 });
  const question = page.getByRole("button", {
    name: /Como confirmar a disponibilidade/,
  });
  await question.click();
  await expect(question).toHaveAttribute("aria-expanded", "true");
  await expect(
    page.getByRole("region", { name: /Como confirmar/ }),
  ).toContainText("Envie sua cidade");
  await question.click();
  await expect(question).toHaveAttribute("aria-expanded", "false");
  const contactLinks = page.locator('a[href^="https://wa.me/"]');
  expect(await contactLinks.count()).toBeGreaterThan(10);
  for (const link of await contactLinks.all()) {
    const url = new URL((await link.getAttribute("href"))!);
    expect(url.pathname).toBe("/5516993778455");
    expect(url.searchParams.get("text")?.length).toBeGreaterThan(10);
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
  }
  await page
    .getByRole("link", { name: "Quero proteger minha residência" })
    .scrollIntoViewIfNeeded();
  expect(
    decodeURIComponent(
      (await page
        .getByRole("link", { name: "Quero proteger minha residência" })
        .getAttribute("href"))!,
    ),
  ).toContain("minha residência");
  for (const img of await page.locator("img").all()) {
    await img.scrollIntoViewIfNeeded();
    await expect
      .poll(() => img.evaluate((el) => (el as HTMLImageElement).naturalWidth))
      .toBeGreaterThan(0);
  }
  expect(errors).toEqual([]);
});
test("formulário valida e prepara mensagem completa sem salvar dados", async ({
  page,
}) => {
  await page.goto("/");
  await page.locator(".contact-form").scrollIntoViewIfNeeded();
  await page.getByRole("button", { name: "Continuar no WhatsApp" }).click();
  expect(
    await page
      .locator('input[name="name"]')
      .evaluate((el) => (el as HTMLInputElement).validity.valueMissing),
  ).toBe(true);
  expect(
    await page
      .locator(".contact-form")
      .evaluate((el) => (el as HTMLFormElement).checkValidity()),
  ).toBe(false);
  await page.locator('[name="name"]').fill("Maria Teste");
  await page.locator('[name="phone"]').fill("123");
  await page.locator('[name="property"]').selectOption("Residência");
  await page.locator('[name="solution"]').selectOption("Alarmes de segurança");
  await page.locator('[name="city"]').fill("Ribeirão Preto, SP");
  await page.locator('[name="message"]').fill("Gostaria de uma avaliação.");
  await page.getByRole("button", { name: "Continuar no WhatsApp" }).click();
  await expect(page.locator('[name="phone"]')).toHaveJSProperty(
    "validationMessage",
    "Informe um WhatsApp com DDD válido.",
  );
  await page.locator('[name="phone"]').fill("(16) 99999-1234");
  await page.evaluate(() => {
    window.open = () => null;
  });
  await page.getByRole("button", { name: "Continuar no WhatsApp" }).click();
  await expect(page.getByRole("status")).toContainText("Finalize o envio");
  const url = new URL(
    (await page
      .getByRole("link", { name: "Abrir conversa" })
      .getAttribute("href"))!,
  );
  for (const value of [
    "Maria Teste",
    "(16) 99999-1234",
    "Residência",
    "Alarmes de segurança",
    "Ribeirão Preto, SP",
    "Gostaria de uma avaliação.",
  ])
    expect(url.searchParams.get("text")).toContain(value);
  expect(await page.evaluate(() => localStorage.length)).toBe(0);
});
test("mobile: menu, foco, teclado, responsividade e movimento reduzido", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [320, 375, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 850 });
    await page.goto("/");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await expect(page.locator(".intro")).toHaveCount(0);
  }
  await page.setViewportSize({ width: 375, height: 812 });
  const toggle = page.getByRole("button", { name: "Abrir menu" });
  await toggle.click();
  const nav = page.getByRole("navigation", { name: "Menu principal móvel" });
  await expect(nav).toBeVisible();
  await expect(nav.getByRole("link", { name: /Início/ })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(toggle).toBeFocused();
  await expect(nav).toHaveCount(0);
  await toggle.click();
  await nav.getByRole("link", { name: /Soluções/ }).click();
  await expect(nav).toHaveCount(0);
  expect(await page.evaluate(() => document.body.style.overflow)).toBe("");
  await expect(page).toHaveURL(/#solucoes/);
});
test("privacidade acessível com retorno ao site", async ({ page }) => {
  await page.goto("/privacidade");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Política de privacidade",
  );
  await expect(
    page.getByText(/não salva seus dados em um banco/),
  ).toBeVisible();
  await page.getByRole("link", { name: "Voltar ao site" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "SEGURANÇA",
  );
});
