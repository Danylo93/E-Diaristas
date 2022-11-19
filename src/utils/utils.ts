export class Utils{
  formatDecimal(decimal: number){
    return parseInt(String(decimal).replace(/^\d+(\.\d{1,2})?$/, ''));
  }
  formatException(exception: JSON): string{
    const error = JSON.stringify(exception);
    return error.replace(/,/g, '<br>').replace(/[^a-zá-ú0-9-<->-\s]/gi, '')
  }
}