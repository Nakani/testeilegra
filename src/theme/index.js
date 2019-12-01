const colors = {
    dark: '#252525',
    white: '#fff',
    transparentDark: 'rgba(37, 37, 37, 0.7)',
    primary: '#252525',
    secondary: '#6e7073',
    highlight: '#E50B13',//em estudo
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
    botFontColor: colors.white,
    userFontColor: colors.white,
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