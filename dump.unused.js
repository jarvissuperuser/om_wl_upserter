
// await registerUser(reg,postReg, user);


// get Job id and stage Id
// await post(`${stg}/all`,setStages,{StageKeys: []});
//
// // await post(`${qst}/all`, verifying, {StageKeys: ["3d2fa473-37f6-49f4-969a-867dc71624cc"]});
// for (let a = 0; a < stages.length; a++){
//     console.log('>> Stage:',stages[a].name);
//     await get(`${qst}/GetAllCandidateStageAnswers?candidateId=${userTarget}&stageId=${stages[a].id}`,
//         questionsAnswered)
// }

// await get(`${stg}/GetAllCandidate?candidateId=${userTarget}&stageId=${}`);

// console.log(duplicateList.length);
//
// duplicateList.forEach(each => {
//     deleteList.push(each.id);
// });
// console.dir({deleteList});
// console.log(questions[0]);

// discard duplicates

// await post(``, )

// await post(`${qst}/upsert`,result => {console.log(result)},{});

// await pm.sendRequest("https://hazie-api.eu-de.mybluemix.net/api/company/all",
//     function (response) {
//         // const res_data = JSON.parse(response.resp);
//         console.log("\x1b[34m\n",
//             "+++++++++++++++++++++++++++++++++++++++++++++++++++\n" +
//             " |                  Hazie Comp                     |\n" +
//             " +++++++++++++++++++++++++++++++++++++++++++++++++++", "\x1b[0m");
//         try {
//             companies = response.resp;
//
//         } catch (e) {
//             console.log(e);
//         }
//     }, {
//         method: "POST",
//         headers: {
//             // Authorization: 'Token 42408c59e7030462b1f4e82ae98f5944ab3d9e26',
//             'Content-Type': 'application/json'
//         },
//         json: {jobKeys: []}
//     }
// );

// await pm.sendRequest("https://hazie-api.eu-de.mybluemix.net/api/stage/all",
//     function (response) {
//         // const res_data = JSON.parse(response.resp);
//         console.log("\x1b[34m\n",
//             "+++++++++++++++++++++++++++++++++++++++++++++++++++\n" +
//             " |                  Hazie stag                     |\n" +
//             " +++++++++++++++++++++++++++++++++++++++++++++++++++", "\x1b[0m");
//         try {
//             stages = response.resp;
//
//             console.log(response);
//             jobs.forEach(job => {
//                 console.dir(job.id);
//             })
//
//         } catch (e) {
//             console.log(e);
//         }
//     }, {
//         method: "POST",
//         headers: {
//             // Authorization: 'Token 42408c59e7030462b1f4e82ae98f5944ab3d9e26',
//             'Content-Type': 'application/json'
//         },
//         json: {}
//     }
// );
