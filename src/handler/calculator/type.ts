export interface IInvestmentHandler {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getFDReturn: (req: any)=> Promise<any>
}