package com.cnfwsy.interfaces.mapper.ent;

import com.cnfwsy.core.mapper.CommonMapper;
import com.cnfwsy.interfaces.bean.ent.EntCompany;
import org.springframework.stereotype.Repository;

/**
 * 类说明:
 * Created by zhangjh on 2016-7-20 15:21:09
 */
@Repository("entCompanyMapper")
public interface EntCompanyMapper extends CommonMapper<EntCompany> {


    void toAuth(EntCompany entCompany);
}