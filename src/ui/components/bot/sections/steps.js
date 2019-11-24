import React from 'react';
import { requisitions } from '../../../../services/requisitions'
import {
    QrCodeComponent
} from '../../qrcode/qrcode.component'
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
                { value: 1, label: 'escanear QrCode! 😍', trigger: 'qrcode' },
                { value: 2, label: 'Configurar WhatsApp!', trigger: 'AboutWhats' },
                { value: 3, label: 'preciso de ajuda!', trigger: 'outros' },
            ],
        },

        {
            id: 'qrcode',
            component: <QrCodeComponent />,
            waitAction: true,
            trigger: ({ value }) => {
                return 'InitPoint'
            }
        },

        {
            id: 'InitPoint',
            message: (value) => {
                console.log(this.props)

                return value.previousValue.message
            },
            trigger: 'InitPointMessage',
        },

        {
            id: 'InitPointMessage',
            message: (value) => {
                return 'Uhuu! 🤑🤑🤑'
            },
            trigger: 'initOptionwithdraw',
        },

        {
            id: 'optionHelp',
            options: [
                { value: 1, label: 'Não consigo escanear minha nota fiscal! 🙄', trigger: 'end' },
                { value: 2, label: 'como resgatar meus pontos! 🤔', trigger: 'end' },
                { value: 3, label: 'outros! 😬', trigger: 'outros' },
            ],
        },

        {
            id: 'initOptionwithdraw',
            message: 'Espero que faça bom proveito ok?',
            trigger: 'helpEnd'
        },

        {
            id: 'helpEnd',
            message: 'Posso te ajudar com mais alguma coisa?',
            trigger: 'optionwithdraw'
        },



        {
            id: 'optionwithdraw',
            options: [
                { value: 1, label: 'Escanear outra nota!', trigger: 'qrcodeAgain' },
                { value: 2, label: 'como resgatar meus pontos! 🤔', trigger: 'end' },
            ],
        },

        {
            id: 'qrcodeAgain',
            message: 'Lembrando que o desconto é por nota fiscal ok?',
            trigger: 'qrcode'
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
