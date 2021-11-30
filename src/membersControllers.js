exports.getAllMembers = async (req, res, next) => {
    res.send("Get all posts route");
}

exports.createNewMember = async(req, res, next ) => {
    res.send("Create New Route");
}

exports.getMembersById = async(req, res, next) => {
    res.send("Get Member by id" );
}