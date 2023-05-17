import chuyenbayService from '../services/chuyenbayService'



let handleCreateChuyenBay = async (req, res) => {
    try {
        let data = await chuyenbayService.createChuyenBay(req.body)
        return res.status(200).json(data)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: "Error server",
        })
    }
}
let handleGetChuyenBay = async (req, res) => {
    let id = req.query.id

    if (!id) {
        return res.status(200).json({
            errCode: 1,
            messsage: 'Missing required params',
            data: []
        })
    }
    let chuyenbay = await chuyenbayService.getAllChuyenbay(id)
    return res.status(200).json({
        errCode: 0,
        messsage: 'Danh sách chuyến bay',
        data: chuyenbay
    })
}

let handleEditChuyenBay = async (req, res) => {
    let data = req.body
    let messsage = await chuyenbayService.editChuyenbay(data)
    return res.status(200).json(messsage)
}

let handleDeleteChuyenBay = async (req, res) => {
    let idChuyenbay = req.query.id
    if (!idChuyenbay) {
        return res.status(200).json({
            errCode: 1,
            message: "Missing required id"
        })
    }
    let messsage = await chuyenbayService.deleteChuyenbay(idChuyenbay)
    return res.status(200).json(messsage)
}

module.exports = {
    handleCreateChuyenBay,
    handleGetChuyenBay,
    handleEditChuyenBay,
    handleDeleteChuyenBay
}
