const colors = {
    '--brown': '#8D6E63',
    '--red': '#e74c3c',
    '--blue': '#3498db',
    '--green': '#1abc9c',
    '--amber': '#FFC107',
    '--cyan': '#00BCD4',
    '--orange': '#FF9800',
    '--purple': '#9C27B0',
    '--indigo-200': '#9FA8DA',
    '--indigo-400': '#5C6BC0',
    '--pink': '#EC407A',
    '--light-green': '#66BB6A',
    '--grey': '#9E9E9E',
    '--white': '#FFFFFF'
};

class ApplicationService {

    static setToolbarColor(toolbarColor) {
        const toolbars = [...document.head.querySelectorAll('[data-toolbar]')];
        toolbars.forEach(toolbar => {
            toolbar.setAttribute('content', colors[toolbarColor]);
        });
    }

}

export default ApplicationService;
