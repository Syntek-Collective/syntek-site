export const products = [
    {
        name: 'PennyWyze',
        description: 'PennyWyze is a TypeScript command-line tool for finding the cheapest AI model that meets your quality bar. You supply a golden dataset: a list of prompts paired with the answers you consider correct. PennyWyze runs those prompts through models from four providers, compares each response to the expected answer, and reports the lowest-cost model that passes. To keep audits fast and cheap, it checks for an exact match first and only asks a second AI to judge the answer when the match isn\'t obvious. If a model fails too many prompts, PennyWyze stops testing it early rather than spending money on a lost cause. Providers and scoring methods are pluggable, so adding a new model or a new way of grading answers doesn\'t mean rewriting the tool.',
        repo: 'https://github.com/Syntek-Collective/PennyWyze',
        doc: '',
        logo: '/products/pennywyze.png',
    },
    {
        name: 'Lemonbeam',
        description: '',
        repo: 'https://github.com/Syntek-Collective/Lemonbeam',
        doc: '',
        logo: '',
    }
]
