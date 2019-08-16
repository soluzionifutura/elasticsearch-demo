"use strict"

const { Client } = require("elasticsearch")
const client = new Client({ node: "http://192.168.1.17:9200" })

let body = {
    mappings: {
      product: {
        properties: {
            productId: { "type": "integer", "index": true },
            domainCode: { "type": "text", "fielddata": true, "index": true },
            languageId: { "type": "integer", "index": true },
            productAwsImages: { "type": "text", "index": false },
            productImage: { "type": "text", "index": false },
            productModel: { "type": "text", "fielddata": true, "index": true },
            productTitle: { "type": "text", "fielddata": true, "index": true },
            productName: { "type": "text", "fielddata": true, "index": true },
            productDescription: { "type": "text", "fielddata": true, "index": true },
            productPricedByAttributes: { "type": "boolean", "index": false },
            productIsNew: { "type": "boolean", "index": true },
            productDateAvailable: { "type": "date", "index": true },
            productSoldOut: { "type": "boolean", "index": true },
            productQtyBoxStatus: { "type": "integer", "index": false },
            productIsCall: { "type": "integer", "index": false },
            productQuantity: { "type": "integer", "index": true },
            productAvailabilityType: { "type": "integer", "index": false },
            productRestockDays: { "type": "integer", "index": false },
            productRating: { "type": "integer", "index": false },
            productTaxClassId: { "type": "integer", "index": false },
            productMasterCategoriesId: { "type": "integer", "index": true },
            productType: { "type": "text", "index": false },
            countryId: { "type": "integer", "index": false },
            zoneId: { "type": "integer", "index": false },
            productPath: { "type": "text", "index": false },
            productBasePrice: { "type": "integer", "index": true },
            productSpecialPrice: { "type": "integer", "index": true },
            productSalePrice: { "type": "integer", "index": true },
            productTaxRate: { "type": "integer", "index": false },
            productQuantityDiscount: { "type": "integer", "index": true },
            productPromo: { "type": "integer", "index": true },
            productCounterReviews: { "type": "integer", "index": false },
            productUrl: { "type": "text", "index": false },
            generationDate: { "type": "date", "index": false },
            cached: { "type": "boolean", "index": false }
          }
      }
  }
}

async function run () {
  await client.indices.create({ index: "holyproducts", include_type_name: true, body: body })

  await client.index({
    index: "holyproducts",
    id: 100,
    body: {
      productId: 100,
      domainCode: "it",
      languageId: 2,
      productAwsImages: '{"80":["images/AC004016/it/80/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"150":["images/AC004016/it/150/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"280":["images/AC004016/it/280/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"500":["images/AC004016/it/500/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"1600":["images/AC004016/it/1600/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"]}',
      productImage: "holyart/108146/AC004016.jpg",
      productModel: "AC004016",
      productTitle: "Bruciaincensi: Bruciaincenso stile antico",
      productName: "Bruciaincenso stile antico",
      productDescription: "Bruciaincenso da altare stile antico in metallo, può funzionare sia a carboncini che a lume adatto per chiese luoghi sacri.<br /> <br /> FUNZIONAMENTO: si appoggia un carboncino sull'apposita retina, all"interno del braciere, si accende il carboncino, poi, solo dopo che è ben acceso, si inseriscono alcuni grani di incenso sul carboncino acceso e si copre con il coperchio diffusore, munito degli appositi fori per l"areazione e diffusione dell"essenza. E" possibile usare anche un tealight all"interno facendo attenzione che lo stoppino non sia troppo lungo e che quindi la fiamma sia troppo alta. Una volta acceso il tealight l"incenso viene poggiato sulla retina e nuovamente si chiude con il coperchio forato.",
      productPricedByAttributes: false,
      productIsNew: true,
      productDateAvailable: null,
      productSoldOut: false,
      productQtyBoxStatus: 1,
      productIsCall: 0,
      productQuantity: 1,
      productAvailabilityType: 2,
      productRestockDays: 20,
      productRating: 5,
      productTaxClassId: 7,
      productMasterCategoriesId: 108146,
      productType: "product",
      countryId: 105,
      zoneId: 244,
      productPath: "108217_108146",
      productBasePrice: 105.7377,
      productSpecialPrice: null,
      productSalePrice: null,
      productTaxRate: 22,
      productQuantityDiscount: null,
      productPromo: null,
      productCounterReviews: 5,
      productUrl: "https://staging.holyart.it/it/articoli-religiosi/bruciaincensi/bruciaincenso-stile-antico",
      generationDate: "2019-08-13T07:34:46.314Z",
      cached: false
    }
  })

  await client.index({
    index: "holyproducts",
    id: 101,
    body: {
      productId: 101,
      domainCode: "it",
      languageId: 2,
      productAwsImages: '{"80":["images/AC004016/it/80/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"150":["images/AC004016/it/150/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"280":["images/AC004016/it/280/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"500":["images/AC004016/it/500/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"1600":["images/AC004016/it/1600/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"]}',
      productImage: "holyart/108146/AC004016.jpg",
      productModel: "AC004016",
      productTitle: "Madonne: Madonna 1",
      productName: "Madonna 1",
      productDescription: "Madonna 1 descrizione",
      productPricedByAttributes: false,
      productIsNew: true,
      productDateAvailable: null,
      productSoldOut: false,
      productQtyBoxStatus: 1,
      productIsCall: 0,
      productQuantity: 1,
      productAvailabilityType: 2,
      productRestockDays: 20,
      productRating: 5,
      productTaxClassId: 7,
      productMasterCategoriesId: 108146,
      productType: "product",
      countryId: 105,
      zoneId: 244,
      productPath: "108217_108146",
      productBasePrice: 2007,
      productSpecialPrice: null,
      productSalePrice: null,
      productTaxRate: 22,
      productQuantityDiscount: null,
      productPromo: null,
      productCounterReviews: 5,
      productUrl: "https://staging.holyart.it/it/articoli-religiosi/bruciaincensi/bruciaincenso-stile-antico",
      generationDate: "2018-08-13T07:34:46.314Z",
      cached: false
    }
  })

  await client.index({
    index: "holyproducts",
    id: 102,
    body: {
      productId: 102,
      domainCode: "it",
      languageId: 2,
      productAwsImages: '{"80":["images/AC004016/it/80/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"150":["images/AC004016/it/150/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"280":["images/AC004016/it/280/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"500":["images/AC004016/it/500/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"1600":["images/AC004016/it/1600/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"]}',
      productImage: "holyart/108146/AC004016.jpg",
      productModel: "AC004016",
      productTitle: "Madonne: Madonna 2",
      productName: "Madonna 2",
      productDescription: "Madonna 2 descrizione",
      productPricedByAttributes: false,
      productIsNew: true,
      productDateAvailable: null,
      productSoldOut: false,
      productQtyBoxStatus: 1,
      productIsCall: 0,
      productQuantity: 1,
      productAvailabilityType: 2,
      productRestockDays: 20,
      productRating: 5,
      productTaxClassId: 7,
      productMasterCategoriesId: 108146,
      productType: "product",
      countryId: 105,
      zoneId: 244,
      productPath: "108217_108146",
      productBasePrice: 112,
      productSpecialPrice: 56,
      productSalePrice: 50,
      productTaxRate: 22,
      productQuantityDiscount: null,
      productPromo: null,
      productCounterReviews: 5,
      productUrl: "https://staging.holyart.it/it/articoli-religiosi/bruciaincensi/bruciaincenso-stile-antico",
      generationDate: "2019-08-13T08:34:46.314Z",
      cached: false
    }
  })

  await client.index({
    index: "holyproducts",
    id: 103,
    body: {
      productId: 103,
      domainCode: "it",
      languageId: 2,
      productAwsImages: '{"80":["images/AC004016/it/80/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"150":["images/AC004016/it/150/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"280":["images/AC004016/it/280/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"500":["images/AC004016/it/500/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"1600":["images/AC004016/it/1600/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"]}',
      productImage: "holyart/108146/AC004016.jpg",
      productModel: "AC004016",
      productTitle: "Santi: San Giovanni",
      productName: "San Giovanni",
      productDescription: "San Giovanni descrizione",
      productPricedByAttributes: false,
      productIsNew: true,
      productDateAvailable: null,
      productSoldOut: false,
      productQtyBoxStatus: 1,
      productIsCall: 0,
      productQuantity: 1,
      productAvailabilityType: 2,
      productRestockDays: 20,
      productRating: 5,
      productTaxClassId: 7,
      productMasterCategoriesId: 108146,
      productType: "product",
      countryId: 105,
      zoneId: 244,
      productPath: "108217_108146",
      productBasePrice: 105.7377,
      productSpecialPrice: 102,
      productSalePrice: 100,
      productTaxRate: 22,
      productQuantityDiscount: null,
      productPromo: null,
      productCounterReviews: 5,
      productUrl: "https://staging.holyart.it/it/articoli-religiosi/bruciaincensi/bruciaincenso-stile-antico",
      generationDate: "2017-08-13T07:34:46.314Z",
      cached: false
    }
  })

  await client.index({
    index: "holyproducts",
    id: 104,
    body: {
      productId: 104,
      domainCode: "it",
      languageId: 2,
      productAwsImages: '{"80":["images/AC004016/it/80/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"150":["images/AC004016/it/150/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"280":["images/AC004016/it/280/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"500":["images/AC004016/it/500/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"1600":["images/AC004016/it/1600/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"]}',
      productImage: "holyart/108146/AC004016.jpg",
      productModel: "AC004016",
      productTitle: "Santi: San Daniele",
      productName: "San Daniele",
      productDescription: "San Daniele descrizione",
      productPricedByAttributes: false,
      productIsNew: true,
      productDateAvailable: null,
      productSoldOut: false,
      productQtyBoxStatus: 1,
      productIsCall: 0,
      productQuantity: 1,
      productAvailabilityType: 2,
      productRestockDays: 20,
      productRating: 5,
      productTaxClassId: 7,
      productMasterCategoriesId: 108146,
      productType: "product",
      countryId: 105,
      zoneId: 244,
      productPath: "108217_108146",
      productBasePrice: 47,
      productSpecialPrice: null,
      productSalePrice: null,
      productTaxRate: 22,
      productQuantityDiscount: null,
      productPromo: null,
      productCounterReviews: 5,
      productUrl: "https://staging.holyart.it/it/articoli-religiosi/bruciaincensi/bruciaincenso-stile-antico",
      generationDate: "2019-08-13T09:34:46.314Z",
      cached: false
    }
  })

  await client.index({
    index: "holyproducts",
    id: 105,
    body: {
      productId: 105,
      domainCode: "it",
      languageId: 2,
      productAwsImages: '{"80":["images/AC004016/it/80/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"150":["images/AC004016/it/150/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"280":["images/AC004016/it/280/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"500":["images/AC004016/it/500/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"1600":["images/AC004016/it/1600/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"]}',
      productImage: "holyart/108146/AC004016.jpg",
      productModel: "AC004016",
      productTitle: "Santi: San Simone",
      productName: "San Simone",
      productDescription: "San Simone descrizione",
      productPricedByAttributes: false,
      productIsNew: true,
      productDateAvailable: null,
      productSoldOut: false,
      productQtyBoxStatus: 1,
      productIsCall: 0,
      productQuantity: 1,
      productAvailabilityType: 2,
      productRestockDays: 20,
      productRating: 5,
      productTaxClassId: 7,
      productMasterCategoriesId: 108146,
      productType: "product",
      countryId: 105,
      zoneId: 244,
      productPath: "108217_108146",
      productBasePrice: 20000,
      productSpecialPrice: 10000,
      productSalePrice: 7012,
      productTaxRate: 22,
      productQuantityDiscount: null,
      productPromo: null,
      productCounterReviews: 5,
      productUrl: "https://staging.holyart.it/it/articoli-religiosi/bruciaincensi/bruciaincenso-stile-antico",
      generationDate: "2019-08-13T07:37:46.314Z",
      cached: false
    }
  })

  await client.index({
    index: "holyproducts",
    id: 106,
    body: {
      productId: 106,
      domainCode: "it",
      languageId: 2,
      productAwsImages: '{"80":["images/AC004016/it/80/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"150":["images/AC004016/it/150/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"280":["images/AC004016/it/280/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"500":["images/AC004016/it/500/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"1600":["images/AC004016/it/1600/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"]}',
      productImage: "holyart/108146/AC004016.jpg",
      productModel: "AC004016",
      productTitle: "Accessori: Rosario 1",
      productName: "Rosario 1",
      productDescription: "Rosario 1 descrizione",
      productPricedByAttributes: false,
      productIsNew: true,
      productDateAvailable: null,
      productSoldOut: false,
      productQtyBoxStatus: 1,
      productIsCall: 0,
      productQuantity: 1,
      productAvailabilityType: 2,
      productRestockDays: 20,
      productRating: 5,
      productTaxClassId: 7,
      productMasterCategoriesId: 108146,
      productType: "product",
      countryId: 105,
      zoneId: 244,
      productPath: "108217_108146",
      productBasePrice: 1,
      productSpecialPrice: 0.5,
      productSalePrice: 0.5,
      productTaxRate: 22,
      productQuantityDiscount: null,
      productPromo: null,
      productCounterReviews: 5,
      productUrl: "https://staging.holyart.it/it/articoli-religiosi/bruciaincensi/bruciaincenso-stile-antico",
      generationDate: "2019-08-13T07:34:50.314Z",
      cached: false
    }
  })

  await client.index({
    index: "holyproducts",
    id: 107,
    body: {
      productId: 107,
      domainCode: "it",
      languageId: 2,
      productAwsImages: '{"80":["images/AC004016/it/80/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"150":["images/AC004016/it/150/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"280":["images/AC004016/it/280/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"500":["images/AC004016/it/500/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"],"1600":["images/AC004016/it/1600/A/SN000000/CLOSEUP01_HD/h-daa5dd9c/bruciaincenso-stile-antico.jpg"]}',
      productImage: "holyart/108146/AC004016.jpg",
      productModel: "AC004016",
      productTitle: "Accessori: Rosario 2",
      productName: "Rosario 2",
      productDescription: "Rosario 2 descrizione",
      productPricedByAttributes: false,
      productIsNew: true,
      productDateAvailable: null,
      productSoldOut: false,
      productQtyBoxStatus: 1,
      productIsCall: 0,
      productQuantity: 1,
      productAvailabilityType: 2,
      productRestockDays: 20,
      productRating: 5,
      productTaxClassId: 7,
      productMasterCategoriesId: 108146,
      productType: "product",
      countryId: 105,
      zoneId: 244,
      productPath: "108217_108146",
      productBasePrice: 123,
      productSpecialPrice: 22,
      productSalePrice: 20,
      productTaxRate: 22,
      productQuantityDiscount: null,
      productPromo: null,
      productCounterReviews: 5,
      productUrl: "https://staging.holyart.it/it/articoli-religiosi/bruciaincensi/bruciaincenso-stile-antico",
      generationDate: "2019-08-13T07:34:46.314Z",
      cached: false
    }
  })

  await client.indices.refresh({ index: "holyproducts" })
}

run().catch(console.error)
