const Router = require('koa-router');
const GoodsModel = require('../../../models/goods');
const routerConfig = require('../../../public/js/route');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var router = new Router();
const getGoodsList = async (ctx) => {
    let query = ctx.query;
    let search = query && query.search != undefined ? query.search : ''
    let userId = ctx.user.id;
    try {
        if (!userId) {
            routerConfig.parameterErr(ctx, {});
            return;
        }
        await GoodsModel.selectData({
            name: {
                [Op.like]: '%' + search + '%'
            }

        }).then((res) => {
            let data = {
                "list": res
            }
            routerConfig.resSuccess(ctx, data)
        })
    } catch (error) {
        routerConfig.resFailure(ctx, error)
    }
}
router.get('/api/goods/findAll', getGoodsList);
module.exports = router