package com.cnfwsy.core.mapper;

import com.cnfwsy.core.bean.DictionaryVo;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author: zhangjh
 * @version:2015年5月6日 下午4:07:33
 */
@Repository("dictionaryMapper")
public interface DictionaryMapper {
    List<DictionaryVo> searchDictionary();
}
