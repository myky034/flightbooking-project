import hangveService from '../services/hangveService'



let handleCreateHangVe = async (req, res) => {
    try {
        let data = await hangveService.createHangVe(req.body)
        return res.status(200).json(data)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: "Error server",
        })
    }
}
let handleGetHangVe = async (req, res) => {
    let id = req.query.id

    if (!id) {
        return res.status(200).json({
            errCode: 1,
            messsage: 'Missing required params',
            data: []
        })
    }
    let hangve = await hangveService.getAllHangVe(id)
    return res.status(200).json({
        errCode: 0,
        messsage: 'Danh sách hạng vé',
        data: hangve
    })
}

let handleEditHangVe = async (req, res) => {
    let data = req.body
    let messsage = await hangveService.editHangVe(data)
    return res.status(200).json(messsage)
}

let handleDeleteHangVe = async (req, res) => {
    let idHangVe = req.query.id
    if (!idHangVe) {
        return res.status(200).json({
            errCode: 1,
            message: "Missing required id"
        })
    }
    let messsage = await hangveService.deleteHangVe(idHangVe)
    return res.status(200).json(messsage)
}

module.exports = {
    handleCreateHangVe,
    handleGetHangVe,
    handleEditHangVe,
    handleDeleteHangVe
}
