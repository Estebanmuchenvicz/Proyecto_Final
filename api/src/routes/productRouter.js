const { Router } = require( 'express' )
const { getProductsHandler, getProductsHandlerById, postProductHandler, getProductsNameHandler } = require( '../handlers/productsHandler' )
const { upload } = require( '../controllers/postProdcuts' )

const productRouter = Router()

productRouter.post( '/', upload.array( 'images', 5 ), postProductHandler )
productRouter.get( '/', getProductsHandler )
productRouter.get( '/search', getProductsNameHandler )
productRouter.get( '/:id', getProductsHandlerById )

module.exports = productRouter