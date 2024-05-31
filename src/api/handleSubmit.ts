const WRITE_URL = "https://script.google.com/macros/s/AKfycbxKR2G3Wd-mIYFfpRZ160bbZD84wK3Z8rzR3dPZNRFu84jSNyxZ3w0V_5kERbBNqWY8/exec"

export async function handleSubmitEvac(data){
    await fetch('WRITE_URL', {
        method: 'POST',
        body: data,
        muteHttpExceptions: true,
    })
}
