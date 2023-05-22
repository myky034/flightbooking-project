import db from "../models/index"




let createSanBay = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.tensanbay) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing params input type"
                })
            } else {
                let res = {}
                let resData = await db.SanBay.create({
                    tensanbay: data.tensanbay,
                    maICAO_IATA: data.maICAO_IATA,
                    tinh: data.tinh,
                    soduongbang: data.soduongbang,
                    loaiduongbang: data.loaiduongbang,
                    chieudaidb: data.chieudaidb,
                    baydem: data.baydem,
                    bayquocte: data.bayquocte,
                })
                res.errCode = 0
                res.message = 'Tạo sân bay thành công'
                res.data = resData
                resolve(res)
            }
        } catch (e) {
            reject(e)
        }
    })
}
let getAllSanbay = (Input) => {
    return new Promise(async (resolve, reject) => {
        try {
            let sanbay = ''
            if (Input === 'ALL') {
                sanbay = await db.SanBay.findAll()
            }
            if (Input && Input !== 'ALL') {
                sanbay = await db.SanBay.findOne({ where: { id: Input } })
            }
            resolve(sanbay)
        }
        catch (e) {
            console.log(e)
            reject(e)
        }
    })
}

let editSanbay = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 1,
                    message: 'Missing required id'
                })
            }
            let sanbay = await db.SanBay.findOne({
                where: { id: data.id },
                raw: false
            })
            if (sanbay) {
                sanbay.tensanbay = data.tensanbay,
                    sanbay.maICAO_IATA = data.maICAO_IATA,
                    sanbay.tinh = data.tinh,
                    sanbay.soduongbang = data.soduongbang,
                    sanbay.loaiduongbang = data.loaiduongbang,
                    sanbay.chieudaidb = data.chieudaidb,
                    sanbay.baydem = data.baydem,
                    sanbay.bayquocte = data.bayquocte,
                    await sanbay.save()

                resolve({
                    errCode: 0,
                    message: 'Cập nhật sân bay thành công',
                    data: sanbay
                })
            } else {
                resolve({
                    errCode: 2,
                    message: `Sân bay không tồn tại trong hệ thống`
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let deleteSanbay = (Id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hangve = await db.SanBay.findOne({
                where: { id: Id }
            })
            if (!hangve) {
                resolve({
                    errCode: 2,
                    message: `Sân bay không tồn tại trong hệ thống`
                })
            }
            await db.SanBay.destroy({
                where: { id: Id }
            })
            resolve({
                errCode: 0,
                message: `Đã xóa sân bay thành công`
            })
        } catch (e) {
            console.log(e)
            reject(e)
        }
    })
}

module.exports = {
    createSanBay,
    getAllSanbay,
    editSanbay,
    deleteSanbay
}
