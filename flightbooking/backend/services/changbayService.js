import db from "../models/index"




let createChangBay = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.sanbaydi || !data.sanbayden) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing params input type"
                })
            } else {
                let res = {}
                let resData = await db.ChangBay.create({
                    sanbaydi: data.sanbaydi,
                    sanbayden: data.sanbayden,
                })
                res.errCode = 0
                res.message = 'Tạo chặng bay thành công'
                res.data = resData
                resolve(res)
            }
        } catch (e) {
            reject(e)
        }
    })
}
let getAllChangBay = (Input) => {
    return new Promise(async (resolve, reject) => {
        try {
            let ChangBay = ''
            if (Input === 'ALL') {
                ChangBay = await db.ChangBay.findAll()
            }
            if (Input && Input !== 'ALL') {
                ChangBay = await db.ChangBay.findOne({ where: { id: Input } })
            }
            resolve(ChangBay)
        }
        catch (e) {
            console.log(e)
            reject(e)
        }
    })
}

let editChangBay = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 1,
                    message: 'Missing required id'
                })
            }
            let changbay = await db.ChangBay.findOne({
                where: { id: data.id },
                raw: false
            })
            if (changbay) {
                changbay.sanbaydi = data.sanbaydi,
                    changbay.sanbayden = data.sanbayden,
                    await changbay.save()

                resolve({
                    errCode: 0,
                    message: 'Cập nhật chặng bay thành công',
                    data: changbay
                })
            } else {
                resolve({
                    errCode: 2,
                    message: `Chặng bay không tồn tại trong hệ thống`
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let deleteChangBay = (Id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let changbay = await db.ChangBay.findOne({
                where: { id: Id }
            })
            if (!changbay) {
                resolve({
                    errCode: 2,
                    message: `Chặng bay không tồn tại trong hệ thống`
                })
            }
            await db.ChangBay.destroy({
                where: { id: Id }
            })
            resolve({
                errCode: 0,
                message: `Đã xóa chặng bay thành công`
            })
        } catch (e) {
            console.log(e)
            reject(e)
        }
    })
}

module.exports = {
    createChangBay,
    getAllChangBay,
    editChangBay,
    deleteChangBay
}
