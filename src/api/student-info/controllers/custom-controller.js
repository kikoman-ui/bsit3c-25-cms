'use strict';

//@ts-ignore
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::student-info.student-info',
    ({strapi}) =>({
        async testApi(ctx) {
            ctx.body = "Hello World",
            ctx.status = 200;
        },
        // Get all student info list
        async getAllStudentList(ctx){
            try{
                const result = await strapi
                .documents('api::student-info.student-info')
                .findMany();

                if(result){
                    return ctx.body = result
                }

            }catch(err){
                return ctx.badRequest(err.message.err);
            }
        },

        // Get Single student details

        // Create student info
        async createStudent(ctx){
            try{
                let {studentno,
                    lastname,
                    firstname,
                    middlname,
                    course,
                    age,
                    gender,
                    section} = ctx.request.body;

                const result = await strapi
                .documents('api::student-info.student-info')
                .create({
                    data: {
                      student_no: studentno,
                      last_name: lastname,
                      first_name: firstname,
                      middle_name: middlname,
                      course: course,
                      age: age,
                      gender: gender,
                      section: section,

                    },
                  });

                if(result){
                    return ctx.body = result
                }

            }catch(err){
                return ctx.badRequest(err.message.err);
            }
        },

        // Update Student info
        async updateStudent(ctx){
            try{
                let{documentId}= ctx.params;
                let {studentno,
                    lastname,
                    firstname,
                    middlname,
                    course,
                    age,
                    gender,
                    section} = ctx.request.body;

                const result = await strapi
                .documents('api::restaurant.restaurant')
                .update({ 
                    documentId: 'documentId',
                    data: {
                      student_no: studentno,
                      last_name: lastname,
                      first_name: firstname,
                      middle_name: middlname,
                      course: course,
                      age: age,
                      gender: gender,
                      section: section,

                    },
                  });

                if(result){
                    return ctx.body = result
                }

            }catch(err){
                return ctx.badRequest(err.message.err);
            }
        }

        
        // Delete student info

    })
);
