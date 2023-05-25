import db from "../models/index"




let createMayBay = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.mamaybay || !data.tongsoghe) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing params input type"
                })
            } else {
                let res = {}
                let resData = await db.MayBay.create({
                    mamaybay: data.mamaybay,
                    tenmaybay: data.tenmaybay,
                    nhasanxuat: data.nhasanxuat,
                    vantoc: data.vantoc,
                    tongsoghe: data.tongsoghe,
                    tongchieudai: data.tongchieudai,
                    saicanh: data.saicanh,
                    chieucao: data.chieucao,
                })
                res.errCode = 0
                res.message = 'Tạo máy bay thành công'
                res.data = resData
                resolve(res)
            }
        } catch (e) {
            reject(e)
        }
    })
}
let getAllMayBay = (Input) => {
    return new Promise(async (resolve, reject) => {
        try {
            let MayBay = ''
            if (Input === 'ALL') {
                MayBay = await db.MayBay.findAll()
            }
            if (Input && Input !== 'ALL') {
                MayBay = await db.MayBay.findOne({ where: { id: Input } })
            }
            resolve(MayBay)
        }
        catch (e) {
            console.log(e)
            reject(e)
        }
    })
}

let editMayBay = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 1,
                    message: 'Missing required id'
                })
            }
            let maybay = await db.MayBay.findOne({
                where: { id: data.id },
                raw: false
            })
            if (maybay) {
                maybay.mamaybay = data.mamaybay,
                    maybay.tenmaybay = data.tenmaybay,
                    maybay.nhasanxuat = data.nhasanxuat,
                    maybay.vantoc = data.vantoc,
                    maybay.tongsoghe = data.tongsoghe,
                    maybay.tongchieudai = data.tongchieudai,
                    maybay.saicanh = data.saicanh,
                    maybay.chieucao = data.chieucao,
                    await maybay.save()

                resolve({
                    errCode: 0,
                    message: 'Cập nhật máy bay thành công',
                    data: maybay
                })
            } else {
                resolve({
                    errCode: 2,
                    message: `Máy bay không tồn tại trong hệ thống`
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let deleteMayBay = (Id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let MayBay = await db.MayBay.findOne({
                where: { id: Id }
            })
            if (!MayBay) {
                resolve({
                    errCode: 2,
                    message: `Máy bay không tồn tại trong hệ thống`
                })
            }
            await db.MayBay.destroy({
                where: { id: Id }
            })
            resolve({
                errCode: 0,
                message: `Đã xóa máy bay thành công`
            })
        } catch (e) {
            console.log(e)
            reject(e)
        }
    })
}

module.exports = {
    createMayBay,
    getAllMayBay,
    editMayBay,
    deleteMayBay
}
