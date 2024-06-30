const asyncHandler = (requestHandlter) => {
    (req, res, next) => {
        Promise.resolve(requestHandlter(req, res, next)).catch((err) => next(err))
    }
}


export { asyncHandler }




