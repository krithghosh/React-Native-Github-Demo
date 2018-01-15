package jobs.com.kritartha.jobs.model;

import android.arch.persistence.room.ColumnInfo;
import android.arch.persistence.room.Entity;
import android.arch.persistence.room.PrimaryKey;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import jobs.com.kritartha.jobs.utils.Config;

/**
 * Created by kritarthaghosh on 15/11/17.
 */
@Entity(tableName = Config.POSITION_TABLE)
public class Position {

    @PrimaryKey
    @ColumnInfo(name = "id")
    @SerializedName("id")
    @Expose
    private String id;

    @ColumnInfo(name = "created_at")
    @SerializedName("created_at")
    @Expose
    private String createdAt;

    @ColumnInfo(name = "title")
    @SerializedName("title")
    @Expose
    private String title;

    @ColumnInfo(name = "location")
    @SerializedName("location")
    @Expose
    private String location;

    @ColumnInfo(name = "type")
    @SerializedName("type")
    @Expose
    private String type;

    @ColumnInfo(name = "description")
    @SerializedName("description")
    @Expose
    private String description;

    @ColumnInfo(name = "how_to_apply")
    @SerializedName("how_to_apply")
    @Expose
    private String howToApply;

    @ColumnInfo(name = "company")
    @SerializedName("company")
    @Expose
    private String company;

    @ColumnInfo(name = "company_url")
    @SerializedName("company_url")
    @Expose
    private String companyUrl;

    @ColumnInfo(name = "company_logo")
    @SerializedName("company_logo")
    @Expose
    private Object companyLogo;

    @ColumnInfo(name = "url")
    @SerializedName("url")
    @Expose
    private String url;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getHowToApply() {
        return howToApply;
    }

    public void setHowToApply(String howToApply) {
        this.howToApply = howToApply;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getCompanyUrl() {
        return companyUrl;
    }

    public void setCompanyUrl(String companyUrl) {
        this.companyUrl = companyUrl;
    }

    public Object getCompanyLogo() {
        return companyLogo;
    }

    public void setCompanyLogo(Object companyLogo) {
        this.companyLogo = companyLogo;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
