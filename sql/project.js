module.exports = {
    //INSERT
    insertProject: "insert into moodle.plass_project(name, language, category, tag, user_id, path, project_usage) values(?, ?, ?, ?, ? , ?, ?)",
    submitHomework: "insert into moodle.plass_projectsubmission(projectid, userid, assignid) values(?, ?, ?)",

    
    //SELECT
    getProjectByUserId : "select * from moodle.plass_project where user_id = ? ",
    selectProjectById: "select * from moodle.plass_project where id = ?",
    checkProjectForUser: "select * from moodle.plass_project where id = ? and user_id = ?",


    //DELETE
    
    deleteProject: "delete from moodle.plass_project where id = ?",

    //UPDATE
    updateProject: "update moodle.plass_project set name = ?, language = ?, category = ?, tag = ?, project_usage = ?, path = ? where id = ?"
}
