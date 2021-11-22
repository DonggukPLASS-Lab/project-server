module.exports = {
    getUserById : 'select * from moodle.mdl_user where id = ?',
    getMaxPort : 'select * from moodle.mdl_user ORDER BY port_vs DESC LIMIT 1',
    setPortByuserId : 'update moodle.mdl_user set port_vs =  ? where id = ?',
    getMyCourses: `SELECT u.id as userid, c.id as courseid, a.id as assignid, c.fullname, a.name 
    FROM moodle.mdl_user u INNER JOIN moodle.mdl_user_enrolments ue ON ue.userid = u.id INNER JOIN moodle.mdl_enrol e 
    ON e.id = ue.enrolid INNER JOIN moodle.mdl_course c ON e.courseid = c.id INNER JOIN moodle.mdl_assign a ON a.course = c.id and u.id = ?;`,
    getUserContainer: 'select * from moodle.plass_container where userid = ?',
    getUserContainerByApi: 'select * from moodle.plass_container where containerapi = ?',
    setUserContainer: 'insert into moodle.plass_container(userid, containername, containerapi) values(?, ?, ?)',
    updateStatusUserContainer: 'update moodle.plass_container set status = ? where userid =  ?',
    deleteUserContainer: 'delete from moodle.plass_container where userid =  ?'
}
