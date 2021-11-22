import { TestBed } from '@angular/core/testing';
import { LoggingService } from './logging.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import SpyInstance = jest.SpyInstance;

describe('LoggingService', () => {
  let loggingService: LoggingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggingService]
    });

    loggingService = TestBed.inject(LoggingService);
  });

  describe('printLog()', () => {
    let spy: SpyInstance;

    beforeEach(() => {
      spy = jest.spyOn(console, 'log');
      loggingService.printLog('Testmessage');
    })

    afterEach( () => {
      spy.mockClear();
    })

    it('should call console.log',  () => {
      expect(spy).toHaveBeenCalled();
    })

    it('should check lastlog', () => {
      expect(loggingService.lastlog).toEqual('Testmessage');
    });

    it('should ', () => {
      loggingService.printLog('new message');
      expect(loggingService.lastlog).toEqual('new message');
    });
  })

});
