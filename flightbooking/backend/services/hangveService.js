import db from "../models/index"



let createHangVe = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.tenhangve || !data.loaive || !data.giavecoban) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing params input type"
                })
            } else {
                let res = {}
                let resData = await db.HangVe.create({
                    tenhangve: data.tenhangve,
                    loaive: data.loaive,
                    giavecoban: data.giavecoban
                })
                res.errCode = 0
                res.message = 'Tạo hạng vé thành công'
                res.data = resData
                resolve(res)
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getAllSanBay = (Input) => {
    return new Promise(async (resolve, reject) => {
        try {
            let SanBay = ''
            if (Input === 'ALL') {
                SanBay = await db.SanBay.findAll()
            }
            if (Input && Input !== 'ALL') {
                SanBay = await db.SanBay.findOne({ where: { id: Input } })
            }
            resolve(SanBay)
        }
        catch (e) {
            console.log(e)
            reject(e)
        }
    })
}

let editSanBay = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 1,
                    message: 'Missing required id'
                })
            }
            let SanBay = await db.SanBay.findOne({
                where: { id: data.id },
                raw: false
            })
            if (SanBay) {
                SanBay.tenSanBay = data.tenSanBay,
                    SanBay.loaive = data.loaive,
                    SanBay.giavecoban = data.giavecoban
                await SanBay.save()

                resolve({
                    errCode: 0,
                    message: 'Cập nhật hạng vé thành công',
                    data: SanBay
                })
            } else {
                resolve({
                    errCode: 2,
                    message: `Hạng vé không tồn tại trong hệ thống`
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let deleteSanBay = (Id) => {
    return new Promise(async (resolve, reject) => {
        let SanBay = await db.SanBay.findOne({
            where: { id: Id }
        })
        if (!SanBay) {
            resolve({
                errCode: 2,
                message: `Hạng vé không tồn tại trong hệ thống`
            })
        }
        await db.SanBay.destroy({
            where: { id: Id }
        })
        resolve({
            errCode: 0,
            message: `Đã xóa hạng vé thành công`
        })
    })
}

module.exports = {
    createHangVe,
    getAllSanBay,
    editSanBay,
    deleteSanBay
}
