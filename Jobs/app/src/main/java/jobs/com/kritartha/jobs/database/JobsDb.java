package jobs.com.kritartha.jobs.database;

import android.arch.persistence.room.Database;
import android.arch.persistence.room.RoomDatabase;

import jobs.com.kritartha.jobs.model.Position;

/**
 * Created by kritarthaghosh on 15/11/17.
 */
@Database(entities = Position.class, version = 1)
public abstract class JobsDb extends RoomDatabase {

    
}
