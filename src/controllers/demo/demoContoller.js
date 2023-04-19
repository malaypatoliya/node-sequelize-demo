const APIResponseFormat = require('../../utils/APIResponseFormat.js');
const DemoService = require('../../services/demo/demoServices.js');


const demo = async (req, res) => {
    try {
        const demo = await DemoService.demo();
        if (!demo)
            return APIResponseFormat._ResDataNotFound(res, "No Data Found");
        return APIResponseFormat._ResDataFound(res, demo);
    } catch (error) {
        return APIResponseFormat._ResServerError(res, error);
    }
}

const addDemo = async (req, res) => {
    try {
        const newDemo = await DemoService.addDemo(req.body);
        if(!newDemo)
            return APIResponseFormat._ResDataNotCreated(res);
        return APIResponseFormat._ResDataCreated(res, newDemo);
    } catch (error) {
        return APIResponseFormat._ResServerError(res, error);
    }
}

const updateDemo = async (req, res) => {
    try {
        let update_id = req.header('update_id');
        let updateData = req.body;
        const updatedDemo = await DemoService.updateDemo(update_id, updateData);
        if(!updatedDemo)
            return APIResponseFormat._ResDataNotUpdated(res);
        return APIResponseFormat._ResDataUpdated(res, updatedDemo);
    } catch (error) {
        return APIResponseFormat._ResServerError(res, error);
    }
}

const deleteDemo = async (req, res) => {
    try {
        let delete_id = req.header('delete_id');
        const deletedDemo = await DemoService.deleteDemo(delete_id);
        if(!deletedDemo)
            return APIResponseFormat._ResDataNotDeleted(res);
        return APIResponseFormat._ResDataDeleted(res);
    } catch (error) {
        return APIResponseFormat._ResServerError(res, error);
    }
}

module.exports = {
    demo,
    addDemo,
    updateDemo,
    deleteDemo
}