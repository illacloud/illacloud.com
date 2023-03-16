export const getPartnerForm = ({
  companyName,
  companyWebsite,
  email,
  firstName,
  lastName,
  title,
}) => {
  const partForm = {
    config: { wide_screen_mode: true },
    header: {
      template: 'green',
      title: { content: 'PARTNER', tag: 'plain_text' },
    },
    elements: [
      {
        tag: 'div',
        text: {
          content:
            '\n' +
            '\n' +
            'Someone submitted the form to become a partner through the official website link.',
          tag: 'lark_md',
        },
      },
      {
        fields: [
          {
            is_short: true,
            text: {
              content: `**😀 Name **\n${firstName}${lastName}`,
              tag: 'lark_md',
            },
          },
          {
            is_short: true,
            text: { content: `**👤 Career**\n${title}`, tag: 'lark_md' },
          },
          { is_short: false, text: { content: '', tag: 'lark_md' } },
          {
            is_short: true,
            text: {
              content: `**🏢 Company name**\n${companyName}`,
              tag: 'lark_md',
            },
          },
          {
            is_short: true,
            text: {
              content: `**💻 Company website**\n${companyWebsite}`,
              tag: 'lark_md',
            },
          },
          { is_short: false, text: { content: '', tag: 'lark_md' } },
          {
            is_short: true,
            text: { content: `**💌 Email**\n${email}`, tag: 'lark_md' },
          },
        ],
        tag: 'div',
      },
    ],
  }
  const submitVal = {
    msg_type: 'interactive',
    card: partForm,
  }
  return JSON.stringify(submitVal)
}

export const getBookForm = ({
  companyName,
  companyWebsite,
  email,
  firstName,
  lastName,
  title,
  about,
  wantTo,
}) => {
  const bookForm = {
    config: { wide_screen_mode: true },
    header: {
      template: 'blue',
      title: { content: 'BOOK A DEMO', tag: 'plain_text' },
    },
    elements: [
      {
        tag: 'div',
        text: {
          content:
            '\n' + '\n' + 'Someone left a clue through the official website.',
          tag: 'lark_md',
        },
      },
      {
        fields: [
          {
            is_short: true,
            text: {
              content: `**😀 Name **\n${firstName}${lastName}`,
              tag: 'lark_md',
            },
          },
          {
            is_short: true,
            text: { content: `**👤 Career**\n${title}`, tag: 'lark_md' },
          },
          { is_short: false, text: { content: '', tag: 'lark_md' } },
          {
            is_short: true,
            text: {
              content: `**🏢 Company name**\n${companyName}`,
              tag: 'lark_md',
            },
          },
          {
            is_short: true,
            text: {
              content: `**💻 Company website**\n${companyWebsite}`,
              tag: 'lark_md',
            },
          },
          { is_short: false, text: { content: '', tag: 'lark_md' } },
          {
            is_short: true,
            text: { content: `**💌 Email**\n${email}`, tag: 'lark_md' },
          },
          {
            is_short: true,
            text: {
              content: `**📈 About his project**\n${about}`,
              tag: 'lark_md',
            },
          },
          { is_short: false, text: { content: '', tag: 'lark_md' } },
          {
            is_short: true,
            text: {
              content: `**📋 Want to do with ILLA**\n${wantTo}`,
              tag: 'lark_md',
            },
          },
        ],
        tag: 'div',
      },
    ],
  }
  const submitVal = {
    msg_type: 'interactive',
    card: bookForm,
  }
  return JSON.stringify(submitVal)
}
