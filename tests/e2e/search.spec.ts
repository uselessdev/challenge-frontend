import { test, expect } from '@playwright/test'

test('user should search and filter', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Árvore - Biblioteca/)

  await page.getByPlaceholder('Pesquisar...').type('Typescript')
  await page.getByText('Aprendendo Typescript').click()

  await expect(page.getByText('Filtrar Resultados da busca:')).toBeVisible()

  await page.getByText('Mais de R$100').click()
  await page.getByText('Disponível', { exact: true }).click()
  await page.getByText('PDF').click()

  await page.reload()

  await expect(page.getByLabel('Mais de R$100')).toBeChecked()
  await expect(page.getByLabel('Disponível', { exact: true })).toBeChecked()
  await expect(page.getByLabel('PDF')).toBeChecked()
})
