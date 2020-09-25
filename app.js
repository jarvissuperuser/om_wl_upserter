const PM = require('./post_mn');
const uuid = require('uuid');

const pm = new PM();

/**
 * questions
 * type 0, string
 * type 1, select string
 *
 * */
const base = 'https://hazie-api.eu-de.mybluemix.net/api';
const idApi = 'http://hazie-id-dev.eu-de.mybluemix.net/api';
const jb = `${base}/job`, cmp = `${base}/company`, stg =  `${base}/stage`, qst = `${base}/question`,
    reg = `${idApi}/registration/`, jbs = `${stg}/Jobs/GetById`;
let stage1 = {}, stage2 = {}, stage3 = {};
let jobs = [], companies = [], stages=[], questions=[], duplicateList = [], deleteList = [];
let d = [];
async function post(url, callback, data) {
    await pm.sendRequest(url,callback,
        {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                json: data
            },
        );
}

async function get(url, callback) {
    await pm.sendRequest(url, callback,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

}

const user = {
    ClientId : `TestEnv`,
    Email : `info@botsza.com`,
    LastName: `BotsZA`,
    FirstName :`info`,
    UseAD: false,
    Password: 'Botsza2020#',
    ConfirmPassword :``,
    Username: 'info'
};

async function registerUser(url, callback, user) {
    await pm.sendRequest(url, callback,
        {
            method: "POST",
            headers: {
                // 'Content-Type': 'x-www-form-urlencoded',
                'Content-Type': 'application/json',
            },
            json: user
        },
    );
}

const postReg = (r) => {
  console.log(r);
};
const setStages = function(res){
    // getStage1(res);
    // getStage2(res);
    stages = res['resp'];
};

const getStage1 = function({resp}) {
    stage1 = resp.filter(s => s.name === 'One')[0];
    console.log(stage1);
};

const getStage2 = function({resp}) {
    stage2 = resp.filter(s => s.name === 'Two')[0];
    console.log(stage2);
};

const getStage3 = function({resp}) {
    stage3 = resp.filter(s => s.name === 'Two')[0];
    console.log(stage3);
};

const questionInStage1  = (q) => {
    const stage1Questions = ["What is your title?", 'Are you South African?', 'Please provide your ID number',
        'What is your home language?', 'What is your school province?', 'Select population group', 'Please select gender',
        'What is your contact number?'
    ];
    return stage1Questions.find(e => e.toLowerCase() === q.toLowerCase());
};

const stage2ques = [
    {
        question: 'Please provide your ID number',
        questionType: 0,
        optionType: 1,
        options: '',
        isActive: true,
        answer: {
            answer: 'string',
            questionId: '325f3820-c095-440e-89bc-6d49ca499878',
            id: '446ad4f8-661d-4470-89a2-c8244d6e31e9'
        },
        stage: {
            name: null,
            jobId: '00000000-0000-0000-0000-000000000000',
            isActive: false,
            id: '00000000-0000-0000-0000-000000000000'
        },
        id: '325f3820-c095-440e-89bc-6d49ca499878'
    },
    {
        question: 'Please provide your ID number',
        questionType: 0,
        optionType: 1,
        options: '',
        isActive: true,
        answer: {
            answer: 'string',
            questionId: '325f3820-c095-440e-89bc-6d49ca499878',
            id: '446ad4f8-661d-4470-89a2-c8244d6e31e9'
        },
        stage: {
            name: null,
            jobId: '00000000-0000-0000-0000-000000000000',
            isActive: false,
            id: '00000000-0000-0000-0000-000000000000'
        },
        id: '325f3820-c095-440e-89bc-6d49ca499878'
    },
    {
        question: 'Please provide your ID number',
        questionType: 0,
        optionType: 1,
        options: '',
        isActive: true,
        answer: {
            answer: 'string',
            questionId: '325f3820-c095-440e-89bc-6d49ca499878',
            id: '446ad4f8-661d-4470-89a2-c8244d6e31e9'
        },
        stage: {
            name: null,
            jobId: '00000000-0000-0000-0000-000000000000',
            isActive: false,
            id: '00000000-0000-0000-0000-000000000000'
        },
        id: '325f3820-c095-440e-89bc-6d49ca499878'
    },
    {
        question: 'Please provide your ID number',
        questionType: 0,
        optionType: 1,
        options: '',
        isActive: true,
        answer: {
            answer: 'string',
            questionId: '325f3820-c095-440e-89bc-6d49ca499878',
            id: '446ad4f8-661d-4470-89a2-c8244d6e31e9'
        },
        stage: {
            name: null,
            jobId: '00000000-0000-0000-0000-000000000000',
            isActive: false,
            id: '00000000-0000-0000-0000-000000000000'
        },
        id: '325f3820-c095-440e-89bc-6d49ca499878'
    },
    {
        question: 'Please provide your ID number',
        questionType: 0,
        optionType: 1,
        options: '',
        isActive: true,
        answer: {
            answer: 'string',
            questionId: '325f3820-c095-440e-89bc-6d49ca499878',
            id: '446ad4f8-661d-4470-89a2-c8244d6e31e9'
        },
        stage: {
            name: null,
            jobId: '00000000-0000-0000-0000-000000000000',
            isActive: false,
            id: '00000000-0000-0000-0000-000000000000'
        },
        id: '325f3820-c095-440e-89bc-6d49ca499878'
    },
    {
        question: 'Please provide your ID number',
        questionType: 0,
        optionType: 1,
        options: '',
        isActive: true,
        answer: {
            answer: 'string',
            questionId: '325f3820-c095-440e-89bc-6d49ca499878',
            id: '446ad4f8-661d-4470-89a2-c8244d6e31e9'
        },
        stage: {
            name: null,
            jobId: '00000000-0000-0000-0000-000000000000',
            isActive: false,
            id: '00000000-0000-0000-0000-000000000000'
        },
        id: '325f3820-c095-440e-89bc-6d49ca499878'
    }
];

const findStage2 = (q) => {
    const questions2 = ['What is the name of your school?', 'Where did you hear about us?',
        'Which results are you using to apply?', 'Which Maths Type have you done?',
        ,
        'What is your percentage for Physics subject?'];

    return questions2.find(qs => qs.toLowerCase().indexOf(q['question'].toLowerCase()) > -1)
};



const filterQuestion = function({resp}) {
    resp.forEach(q => {
       if (questionInStage1(q['question'].toString())) {
           q.stage = stage1;
       }else {
           q.stage = stage2;
       }
       post(`${qst}/upsert`, upsertResolve, q)
    });

};


const verifying =  ({resp}) => {
    questions = resp;
    // resp.forEach(q => { findDuplicate(q) });
    // resp.forEach(q => {
    //     //if (findStage2(q)) {
    //         console.log(q['question']);
    //     //}
    // });
    //
    // console.log(resp.length)
};

const upsertResolve = result => {
    console.log(result.statusCode, 'status');
};

const findDuplicate = (q) => {
    let duplicate = questions.filter(qs => qs['question'].toLowerCase() === q ['question'].toLowerCase());
    let first  = duplicate[0];
    duplicateList.push(... duplicate.filter(qs => qs['id'] !== first['id']));

};

const userTarget = 'befb6d43-d788-e3a2-a923-16873ff375d1';
const questionsAnswered =  async ({resp}) => {
    const result = JSON.parse(resp);
    if (result.length) {
        await post(`${qst}/all`, verifying, {StageKeys: [result[0]['stageId']]});
        for (let b = 0; b < result.length; b++) {
            const filtered = questions.filter(q => q['id'] === result[b]['questionId'])[0];
            // console.log(filtered);
            console.log(`${filtered['question']} :  ${result[b]['answer']}`)
        }
    }
};

(async function main() {

    await post(`${jbs}`,logb => console.log(logb),'bc0cc86f-3cab-a218-cb49-b86105f73a48');
})();
