module.exports = {
    extends: 'stylelint-config-standard',
    rules: {
        indentation: [
            4, {
                except: ['block']
            }
        ],
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'value'
                ]
            }
        ],
        'property-no-unknown': [
            true,
            {
                ignoreProperties: [
                    'composes'
                ]
            }
        ],
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: [
                    'global'
                ]
            }
        ]
    }
}
