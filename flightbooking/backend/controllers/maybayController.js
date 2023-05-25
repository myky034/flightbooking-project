import maybayService from '../services/maybayService'



let handleCreateMayBay = async (req, res) => {
    try {
        let data = await maybayService.createMayBay(req.body)
        return res.status(200).json(data)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: "Error server",
        })
    }
}
let handleGetMayBay = async (req, res) => {
    let id = req.query.id

    if (!id) {
        return res.status(200).json({
            errCode: 1,
            messsage: 'Missing required params',
            data: []
        })
    }
    let MayBay = await maybayService.getAllMayBay(id)
    return res.status(200).json({
        errCode: 0,
        messsage: 'Danh sách máy bay',
        data: MayBay
    })
}

let handleEditMayBay = async (req, res) => {
    let data = req.body
    let messsage = await maybayService.editMayBay(data)
    return res.status(200).json(messsage)
}

let handleDeleteMayBay = async (req, res) => {
    let idMayBay = req.query.id
    if (!idMayBay) {
        return res.status(200).json({
            errCode: 1,
            message: "Missing required id"
        })
    }
    let messsage = await maybayService.deleteMayBay(idMayBay)
    return res.status(200).json(messsage)
}

module.exports = {
    handleCreateMayBay,
    handleGetMayBay,
    handleEditMayBay,
    handleDeleteMayBay
}
