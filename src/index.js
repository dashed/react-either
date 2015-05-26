const React = require('react');
const DEFAULT_SHOULD_RENDER = function() {
    return true;
}

module.exports = either;

function either(Component = null, AltComponent = null, shouldRender = DEFAULT_SHOULD_RENDER) {

    const ComponentDisplayName = Component && Component.displayName || 'null';
    const AltComponentDisplayName = AltComponent && AltComponent.displayName || 'null';

    const EitherContainer = React.createClass({

        displayName: `${ComponentDisplayName}.${AltComponentDisplayName}.EitherContainer`,

        render() {
            const ChosenComponent = shouldRender.call(null, this.props) ? Component : AltComponent;

            return(ChosenComponent === null ? null : <ChosenComponent {...this.props} />);
        }
    });

    return EitherContainer;
}
