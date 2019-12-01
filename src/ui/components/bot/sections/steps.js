import React from 'react';
import { requisitions } from 'services/requisitions'
import { Dialogflow } from './dialogflow'

export const getSteps = (setState, getState) => {
    const getAtendanceType = (msg) => {
        let templateMessage = []
        templateMessage = {
            name: getState().nameUser,
            body: 'Oi ' + getState().nameUser + ', enviou uma mensagem do app: ' + msg
        }
        return templateMessage
    };

    const stepsInit = [

        {
            id: '0',
            message: 'Oi!',
            trigger: '1',
        },

        {
            id: '1',
            message: 'Tudo bem?',
            trigger: '2',
        },

        {
            id: '2',
            message: 'o que posso te ajudar?',
            trigger: 'optionInit',
        },

        {
            id: 'optionInit',
            options: [
                { value: 1, label: 'Me conte sobre o projeto! 😍', trigger: 'end' },
                { value: 3, label: 'preciso de ajuda!', trigger: 'outros' },
            ],
        },

        {
            id: 'outros',
            message: 'Claro, o que precisa?',
            trigger: () => {
                setState({ inputUser: 'flex' });
                return 'initOutros';
            },
        },

        {
            id: 'initOutros',
            user: true,
            validator: (info) => {
                setState({ inputUser: 'none', });
                return true;
            },
            trigger: 'dialogResponse',
        },

        {
            id: 'dialogResponse',
            component: <Dialogflow />,
            trigger: 'resultHelp',
            waitAction: true,
        },
        {
            id: 'resultHelp',
            message: (message) => {
                setState({ inputUser: 'flex', });
                return '{previousValue}'
            },
            trigger: 'initOutros',
        },

        {
            id: 'AboutWhats',
            message: 'Gostou né,!',
            trigger: 'initWhats',
        },

        {
            id: 'initWhats',
            message: 'Imagina só! você receber as notificações sobre seu pet (como o aviso que seu pet está pronto do seu maravilhoso dia de princesa/príncipe), e também, melhores promoções e cupons com descontos incríveis, no whatsApp!',
            trigger: 'optionWhats',
        },

        {
            id: 'optionWhats',
            options: [
                { value: 1, label: 'Quero receber notificações pelos Whats!', trigger: 'getName' },
                { value: 2, label: 'como resgatar meus pontos! 🤔', trigger: 'end' },
            ],
        },

        {
            id: 'getName',
            message: 'Envie uma mensagem para nossos Testers ok?',
            trigger: () => {
                setState({ inputUser: 'flex' });
                return 'initName';
            },
        },

        {
            id: 'initName',
            user: true,
            validator: (name) => {
                setState({ inputUser: 'none', nameUser: name });
                // getAtendanceType()
                return true;
            },
            trigger: 'nameVisitor',
        },

        {
            id: 'nameVisitor',
            message: 'Qual a mensagem que deseja enviar?',
            trigger: () => {
                setState({ inputUser: 'flex' });
                return 'initNameVisitor';
            },
        },

        {
            id: 'initNameVisitor',
            user: true,
            validator: (msg) => {
                setState({ inputUser: 'none', message: msg });
                let message = getAtendanceType(msg)
                getNameAttendance(message)
                return true;
            },
            trigger: 'waitAttendance1',
        },

        {
            id: 'waitAttendance1',
            message: 'posso ajudar com mais alguma coisa?',
            trigger: 'optionEnd',
        },

        {
            id: 'optionEnd',
            options: [
                { value: 1, label: 'É só isso, Obrigado!', trigger: 'end' },
                { value: 2, label: 'Sim, preciso de outro favor!', trigger: 'optionInit' },
            ],
        },


        {
            id: 'end',
            message: 'Até mais!',
            end: true,
        },
    ];
    return stepsInit;
};

async function getNameAttendance(name) {
    const response = await requisitions.sendMessageWhats(name)
    return response
}
