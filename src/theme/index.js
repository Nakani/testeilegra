const colors = {
    dark: '#252525',
    transparentDark: 'rgba(37, 37, 37, 0.7)',
    primary: '#fff',
    secondary: '#6e7073',
    highlight: '#1EA2FF',//em estudo
}
const category = {
    backgroundColor: colors.primary
}

const themeApp = {
    backgroundHeader: colors.dark,
    backgroundBody: colors.dark,
    backgroundTabBar: colors.primary,
}

const themeBot = {
    botFontColor: colors.dark,
    userFontColor: colors.dark,
    borderColor: colors.highlight,
    optionBubbleColor: colors.highlight,
}

const themeButtons = {
    backgroundColor: colors.highlight
}

const colorTab = {
    activeColor: colors.highlight,
    inactiveColor: colors.secondary
}

export const theme = {
    colors,
    themeApp,
    colorTab,
    themeBot,
    themeButtons,
    category
}