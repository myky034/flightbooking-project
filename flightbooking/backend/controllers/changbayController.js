import changbayService from '../services/changbayService'



let handleCreateChangBay = async (req, res) => {
    try {
        let data = await changbayService.createChangBay(req.body)
        return res.status(200).json(data)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: "Error server",
        })
    }
}
let handleGetChangBay = async (req, res) => {
    let id = req.query.id

    if (!id) {
        return res.status(200).json({
            errCode: 1,
            messsage: 'Missing required params',
            data: []
        })
    }
    let ChangBay = await changbayService.getAllChangBay(id)
    return res.status(200).json({
        errCode: 0,
        messsage: 'Danh sách chặng bay',
        data: ChangBay
    })
}

let handleEditChangBay = async (req, res) => {
    let data = req.body
    let messsage = await changbayService.editChangBay(data)
    return res.status(200).json(messsage)
}

let handleDeleteChangBay = async (req, res) => {
    let idChangBay = req.query.id
    if (!idChangBay) {
        return res.status(200).json({
            errCode: 1,
            message: "Missing required id"
        })
    }
    let messsage = await changbayService.deleteChangBay(idChangBay)
    return res.status(200).json(messsage)
}

module.exports = {
    handleCreateChangBay,
    handleGetChangBay,
    handleEditChangBay,
    handleDeleteChangBay
}
