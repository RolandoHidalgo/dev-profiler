export default defineEventHandler(async event => {
    return  await useDrizzle().select().from(tables.skills).all();

})