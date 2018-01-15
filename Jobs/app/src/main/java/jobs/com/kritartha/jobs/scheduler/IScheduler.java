package jobs.com.kritartha.jobs.scheduler;

import rx.Scheduler;

/**
 * Created by kritarthaghosh on 16/11/17.
 */

public interface IScheduler {

    Scheduler mainThread();

    Scheduler backgroundThread();
}
