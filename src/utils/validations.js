export function noSpecialChars(value) {
    return /^[A-Za-z\s]*$/.test(value)
}
export function strongPassword(value) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)
}
export function validatePassword(value) {
    const hasMinLength = value.length >= 8
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value)
    const hasUpperCase = /[A-Z]/.test(value)
    const hasLowerCase = /[a-z]/.test(value)
    const hasNumber = /\d/.test(value)

    return (
        hasMinLength &&
        hasSpecialChar &&
        hasUpperCase &&
        hasLowerCase &&
        hasNumber
    )
}
