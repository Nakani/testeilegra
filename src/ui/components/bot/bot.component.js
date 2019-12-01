import React, { Component } from 'react';
import Bot from 'react-native-chatbot';
import { theme } from 'theme'
import { getSteps } from './sections/steps'

export class ChatBot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputUser: 'none',
        }
    }

    handleStep = (data) => {
        this.setState(data, () => console.log(data));
    }

    getStepType = () => this.state




    render() {
        const { inputUser } = this.state
        const { themeBot, themeButtons } = theme
        return (
            <Bot
                steps={getSteps(this.handleStep, this.getStepType)}
                //steps={this.steps}
                speechSynthesis={{ enable: true, lang: 'pt-br' }}
                hideBotAvatar={true}
                hideUserAvatar={true}
                botFontColor={themeBot.botFontColor}
                userFontColor={themeBot.userFontColor}
                botBubbleColor={'transparent'}
                userBubbleColor={'transparent'}
                bubbleStyle={{
                    borderWidth: 3,
                    borderColor: themeBot.borderColor
                }}
                userBubbleStyle={{
                    borderWidth: 3,
                    borderColor: themeBot.borderColor
                }}
                optionBubbleColor={themeBot.optionBubbleColor}
                style={{ backgroundColor: '#f7f7f7 ', margin: 0, }}
                contentStyle={{ backgroundColor: 'transparent', }}
                customStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
                placeholder={'Digite sua mensagem!'}
                submitButtonContent={'Enviar'}
                footerStyle={{
                    backgroundColor: '#fff',
                    margin: 5,
                    padding: 1,
                    borderRadius: 7,
                    elevation: 2,
                    display: inputUser
                }}
                submitButtonStyle={{
                    backgroundColor: '#2D9634',
                    borderRadius: 4,
                    width: 63,
                    margin: 2
                }}

            />
        );
    }
}
