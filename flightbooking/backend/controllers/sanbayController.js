import sanbayService from '../services/sanbayService'



let handleCreateSanBay = async (req, res) => {
    try {
        let data = await sanbayService.createSanBay(req.body)
        return res.status(200).json(data)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: "Error server",
        })
    }
}
let handleGetSanbay = async (req, res) => {
    let id = req.query.id

    if (!id) {
        return res.status(200).json({
            errCode: 1,
            messsage: 'Missing required params',
            data: []
        })
    }
    let sanbay = await sanbayService.getAllSanbay(id)
    return res.status(200).json({
        errCode: 0,
        messsage: 'Danh sách sân bay',
        data: sanbay
    })
}

let handleEditSanbay = async (req, res) => {
    let data = req.body
    let messsage = await sanbayService.editSanbay(data)
    return res.status(200).json(messsage)
}

let handleDeleteSanbay = async (req, res) => {
    let idsanbay = req.query.id
    if (!idsanbay) {
        return res.status(200).json({
            errCode: 1,
            message: "Missing required id"
        })
    }
    let messsage = await sanbayService.deleteSanbay(idsanbay)
    return res.status(200).json(messsage)
}

module.exports = {
    handleCreateSanBay,
    handleGetSanbay,
    handleEditSanbay,
    handleDeleteSanbay
}
