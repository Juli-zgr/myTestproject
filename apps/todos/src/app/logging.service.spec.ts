import { TestBed } from '@angular/core/testing';
import { LoggingService } from './logging.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoggingService', () => {
  let loggingService: LoggingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoggingService]
    });
    loggingService = TestBed.inject(LoggingService);
  });

  it('should return available languages',  () => {
    loggingService.printLog('Hello there');
    expect(loggingService.printLog).toHaveBeenCalled();
  })

});
