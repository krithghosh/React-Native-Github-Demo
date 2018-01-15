package jobs.com.kritartha.jobs.network;

import java.util.List;
import java.util.Map;

import io.reactivex.Flowable;
import jobs.com.kritartha.jobs.model.Position;
import retrofit2.http.GET;
import retrofit2.http.Query;
import retrofit2.http.QueryMap;

/**
 * Created by kritarthaghosh on 16/11/17.
 */

public interface RestApiService {

    @GET()
    Flowable<List<Position>> getJobPositions(@QueryMap Map<String, String> queryMap);

    @GET
    Flowable<Position> getPositionDetail(@Query("id") String id);
}
