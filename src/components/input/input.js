import React from 'react';

export default class Input extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.meta.active && this.props.meta.active) {
      this.input.focus()
    }
  }
  render() {
    const Element = this.props.element || 'input';

    let error;
    if (this.props.meta.touched && this.props.meta.error) {
      error = <div className="form-error">{this.props.meta.error}</div>
    }
    let warning;
    if (this.props.meta.touched && this.props.meta.error) {
      warning = (
        <div className="form-warning">{this.props.meta.warning}</div>
      );
    }

    return (
      <div className="form-input">
        {/* <label htmlFor="{this.props.input.name">
          {this.props.label}
          {error}
          {warning}
        </label> */}
        <Element
          {...this.props.input}
          id={this.props.input.name}
          type={this.props.type}
          className={this.props.className}
          ref={input => (this.input=input)}
          name={this.props.name}
          placeholder={this.props.placeholder}
          aria-label={this.props.arialabel}
        >
          {this.props.children}
        </Element>
      </div>

    );
    }
}

