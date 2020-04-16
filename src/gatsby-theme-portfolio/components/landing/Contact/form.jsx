import React from 'react'
import {css} from 'styled-components'
import {formstyle} from './styles'

// export interface ReactMailFormProps {
//   to: string;
//   className?: string;
//   titleMaxLength?: string | number;
//   titlePlaceholder?: string;
//   contentsRows?: string | number;
//   contentsMaxLength?: string | number;
//   contentsPlaceholder?: string;
//   buttonText?: string;
// }

// interface ReactMailFormState {
//   title: string;
//   contents: string;
// }

// export default class ReactMailForm extends React.Component<ReactMailFormProps, ReactMailFormState> {
//   public state: ReactMailFormState = {
//     title: '',
//     contents: '',
//   };

//   public constructor(props: ReactMailFormProps) {
//     super(props);
//     const { to } = this.props;

//     if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(to)) {
//       throw new Error('Invalid email address');
//     }
//   }

//   public render(): React.ReactElement {
//     const {
//       to,
//       className = '',
//       titleMaxLength = 2000,
//       titlePlaceholder = 'Title...',
//       contentsRows,
//       contentsMaxLength = 6000,
//       contentsPlaceholder = 'Contents...',
//       buttonText = 'Send E-mail',
//     } = this.props;
//     const { title, contents } = this.state;

//     return (
//       <div className={className}>
//         <input
//           type="text"
//           value={title}
//           onChange={this.handleTitle}
//           maxLength={Number(titleMaxLength)}
//           placeholder={titlePlaceholder}
//         />
//         <input
//           type="text"
//           value={contents}
//           onChange={this.handleContents}
//           maxLength={Number(contentsMaxLength)}
//           placeholder={contentsPlaceholder}
//         />
//         <a
//           href={`mailto:${to}?subject=${title}&body=${contents}`}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {buttonText}
//         </a>
//       </div>
//     );
//   }

//   private handleTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     this.setState({ title: e.target.value });
//   };

//   private handleContents = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     this.setState({ contents: e.target.value });
//   };
// }


export default class Form extends React.Component {
  constructor(props){
    super(props);    
  }


  render(){
    return (
      <form name="contact" method="post" css={formstyle}>
        <input type="text" name="username" placeholder="Name" required/>
        <input type="email" name="useremail" placeholder="Email" required/>
        <textarea name="message" name="message" placeholder="Your Message" required />
        <button type="submit" name="sendmessage">Submit</button>
      </form>
    );
  }

}