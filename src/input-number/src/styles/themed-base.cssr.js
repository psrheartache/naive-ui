import { cTB, c, cB, cE, cM, insideFormItem } from '../../../_utils/cssr'

export default c([
  ({ props }) => {
    const {
      easeInOutCubicBezier
    } = props.$base
    const {
      borderRadius
    } = props.$local
    const {
      buttonColorDisabled,
      buttonTextColorDisabled,
      placeholderColorDisabled,
      colorDisabled,
      textColorDisabled,
      textColor,
      borderColor,
      borderColorHover,
      buttonColor,
      buttonColorHover,
      buttonColorActive,
      buttonTextColor,
      buttonTextColorHover,
      buttonTextColorActive,
      caretColor,
      color: backgroundColor,
      colorFocus,
      borderMaskBoxShadowFocus,
      borderMaskBoxShadowHover,
      placeholdeColor
    } = props.$local.default
    return cTB('input-number', {
      raw: `
        position: relative;
        box-sizing: border-box;
        width: 152px;
        display: inline-block;
        outline: none;
        z-index: auto;
      `,
      borderRadius
    }, [
      cE('border-mask', {
        raw: `
          position: absolute;
          z-index: 1;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          box-shadow: inset 0 0 0px 1px transparent;
          border-radius: ${borderRadius};
          transition: box-shadow .3s ${easeInOutCubicBezier};
          pointer-events: none;
        `
      }),
      cE('minus-button', {
        left: 0,
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius
      }, [
        cB('input-number-button-border-mask', {
          borderTopLeftRadius: borderRadius,
          borderBottomLeftRadius: borderRadius
        }),
        cB('input-number-button-body', {
          left: '1px',
          right: 0
        }, [
          cB('icon', {
            transform: 'translateX(-1px)'
          })
        ]),
        cB('input-number-button-boundary', {
          left: 0
        })
      ]),
      cE('add-button', {
        right: 0,
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius
      }, [
        cB('input-number-button-border-mask', {
          borderTopRightRadius: borderRadius,
          borderBottomRightRadius: borderRadius
        }),
        cB('input-number-button-body', {
          right: '1px',
          left: 0
        }, [
          cB('icon', {
            transform: 'translateX(1px)'
          })
        ]),
        cB('input-number-button-boundary', {
          right: 0
        })
      ]),
      cM('disabled', {
        cursor: 'not-allowed'
      }, [
        cE('button', {
          pointerEvents: 'none'
        }, [
          cB('input-number-button-body', {
            backgroundColor: buttonColorDisabled
          }),
          cB('input-number-button-boundary', {
            backgroundColor: buttonColorDisabled
          }),
          cB('icon', {
            fill: buttonTextColorDisabled,
            stroke: buttonTextColorDisabled
          })
        ]),
        cE('input', {
          backgroundColor: colorDisabled,
          color: textColorDisabled,
          pointerEvents: 'none'
        }, [
          c('&::placeholder', {
            color: placeholderColorDisabled
          })
        ])
      ]),
      cM('invalid', [
        cE('input', {
          textDecoration: 'line-through',
          textDecorationColor: textColor
        })
      ]),
      cE('button', {
        raw: `
          background-color: transparent;
          overflow: hidden;
          outline: none;
          position: absolute;
          cursor: pointer;
          z-index: auto;
          top: 0;
          padding: 0;
          border: none;
          font-size: 14px;
        `
      }, [
        cB('input-number-button-border-mask', {
          raw: `
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
          `,
          transition: `
            box-shadow .3s ${easeInOutCubicBezier}
          `,
          boxShadow: `inset 0 0 0 1px ${borderColor}`
        }),
        cB('input-number-button-body', {
          raw: `
            position: absolute;
            top: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          `,
          transition: `
            background-color .3s ${easeInOutCubicBezier}
          `,
          backgroundColor: buttonColor
        }),
        cB('input-number-button-boundary', {
          raw: `
            width: 1px;
            position: absolute;
            top: 0;
            bottom: 0;
          `,
          transition: `
            background-color .3s ${easeInOutCubicBezier}
          `,
          backgroundColor: buttonColor
        }),
        cB('icon', {
          fill: buttonTextColor,
          stroke: buttonTextColor
        }),
        c('&:hover ~', [
          cE('border-mask', {
            boxShadow: `inset 0 0 0 1px ${borderColorHover}`
          })
        ]),
        c('&:hover', [
          cB('input-number-button-body', {
            backgroundColor: buttonColorHover
          }),
          cB('input-number-button-boundary', {
            backgroundColor: buttonColorHover
          }),
          cB('icon', {
            stroke: buttonTextColorHover,
            fill: buttonTextColorHover
          })
        ]),
        c('&:active', [
          cB('input-number-button-body', {
            backgroundColor: buttonColorActive
          }),
          cB('input-number-button-boundary', {
            backgroundColor: buttonColorActive
          }),
          cB('icon', {
            stroke: buttonTextColorActive,
            fill: buttonTextColorActive
          })
        ]),
        cM('disabled', {
          cursor: 'not-allowed'
        }, [
          cB('input-number-button-body', {
            backgroundColor: buttonColorDisabled
          }),
          cB('input-number-button-boundary', {
            backgroundColor: buttonColorDisabled
          }),
          cB('icon', {
            stroke: buttonTextColorDisabled,
            fill: buttonTextColorDisabled
          })
        ])
      ]),
      cE('input', {
        raw: `
          outline: none;
          box-sizing: border-box;
          border-radius: ${borderRadius};
          transition:
            color .3s ${easeInOutCubicBezier},
            caret-color .3s ${easeInOutCubicBezier},
            background-color .3s ${easeInOutCubicBezier},
            box-shadow .3s ${easeInOutCubicBezier},
            text-decoration-color .3s ${easeInOutCubicBezier};
          border: none;
          width: 100%;
          text-align: center;
        `,
        backgroundColor,
        boxShadow: `inset 0 0 0 1px ${borderColor}`,
        color: textColor,
        caretColor: caretColor
      }, [
        c('&::placeholder', {
          transition: `color .3s ${easeInOutCubicBezier}`,
          color: placeholdeColor
        }),
        c('&:hover ~', [
          cE('border-mask', {
            boxShadow: borderMaskBoxShadowHover
          })
        ]),
        c('&:focus', {
          backgroundColor: colorFocus
        }, [
          c('& ~', [
            cE('border-mask', {
              boxShadow: borderMaskBoxShadowFocus
            })
          ])
        ])
      ])
    ])
  },
  ({ props }) => ['warning', 'error'].map(status => {
    const pallete = props.$local[status]
    const {
      borderMaskBoxShadow,
      borderMaskBoxShadowHover,
      borderMaskBoxShadowFocus,
      colorFocus,
      caretColor,
      buttonTextColorHover,
      buttonTextColorActive
    } = pallete
    return insideFormItem(
      status,
      cTB('input-number', [
        cE('border-mask', {
          boxShadow: borderMaskBoxShadow
        }),
        cE('input', {
          caretColor: caretColor
        }, [
          c('&:hover ~', [
            cE('border-mask', {
              boxShadow: borderMaskBoxShadowHover
            })
          ]),
          c('&:focus', {
            backgroundColor: colorFocus
          }, [
            c('& ~', [
              cE('border-mask', {
                boxShadow: borderMaskBoxShadowFocus
              })
            ])
          ])
        ]),
        cE('button', [
          c('&:hover', [
            cB('icon', {
              fill: buttonTextColorHover,
              stroke: buttonTextColorHover
            })
          ]),
          c('&:active', [
            cB('icon', {
              fill: buttonTextColorActive,
              stroke: buttonTextColorActive
            })
          ])
        ])
      ])
    )
  })
])