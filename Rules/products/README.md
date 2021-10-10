# CUSTOMER

**RULES `UPDATE` PRODUCT**
**RF**
✅ DEVE buscar product pelo `ID`
✅ DEVE chekar e validar `status` existe
✅ DEVE validar `valor de custo deve ser menor do que de venda`
✅ NÃO DEVE permitir inativar status se produto ainda tiver estoque
✅ VALIDAR se `categoria existe`
🟥 NÃO DEVE ter o mesmo code e nem o mesmo bar_code

🟥 DEVE poder inserir uma imagem do produto(OPTIONAL)
**RNF**

---

**RULES `CREATE` AND SAVE PRODUCT**
**RF**
✅ `NÃO DEVE` permitir registrar o mesmo `product_name` ja existente
✅ DEVE validar `valor de custo deve ser menor do que de venda`
✅ VALIDAR se `categoria existe`
✅ `QUANTIDADE` inicializar com zero ao criar produto
🟥 NÃO DEVE ter o mesmo code e nem o mesmo bar_code

🟥 DEVE poder inserir uma imagem do produto(OPTIONAL)

**RNF**

---
