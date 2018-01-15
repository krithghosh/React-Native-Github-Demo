package jobs.com.kritartha.jobs.database;

import android.arch.persistence.room.Dao;
import android.arch.persistence.room.Delete;
import android.arch.persistence.room.Insert;
import android.arch.persistence.room.OnConflictStrategy;
import android.arch.persistence.room.Query;

import java.util.List;

import io.reactivex.Flowable;
import jobs.com.kritartha.jobs.model.Position;
import jobs.com.kritartha.jobs.utils.Config;

/**
 * Created by kritarthaghosh on 16/11/17.
 */
@Dao
public interface PositionDao {

    @Query("SELECT * FROM " + Config.POSITION_TABLE)
    Flowable<List<Position>> getPositions();

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    void insert(Position position);

    @Query("DELETE FROM " + Config.POSITION_TABLE)
    void deleteAll();
}
