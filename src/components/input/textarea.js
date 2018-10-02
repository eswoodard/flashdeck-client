import React from 'react';
import Textarea from 'react-textarea-autosize';


export default class Input extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.meta.active && this.props.meta.active) {
      this.textarea.focus()
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
        <label htmlFor="{this.props.input.name">
          {this.props.label}
          {error}
          {warning}
        </label>
        <Textarea
          {...this.props.input}
          id={this.props.input.name}
          type={this.props.type}
          className={this.props.className}
          inputRef={tag=> (this.textarea=tag)}
          name={this.props.name}
          placeholder={this.props.placeholder}
          aria-label={this.props.arialabel}
          maxRows={4}
        >
          {this.props.children}
        </Textarea>
      </div>

    );
    }
}


