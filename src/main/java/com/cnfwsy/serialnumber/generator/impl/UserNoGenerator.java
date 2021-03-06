package com.cnfwsy.serialnumber.generator.impl;

import com.cnfwsy.serialnumber.generator.AbstractNoGenerator;
import com.cnfwsy.serialnumber.generator.INoGenerator;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.concurrent.ArrayBlockingQueue;

/**
 * 注册用户编码生成器
 * Created by zhangjh on 16/6/13.
 */
@Component
public class UserNoGenerator extends AbstractNoGenerator implements INoGenerator {

    private static ArrayBlockingQueue<String> queue = new ArrayBlockingQueue(50, true);

    @Override
    public String nextNo(int len) {
        double random = (Math.random() * (len + 1) + 1) * Math.pow(10, len);
        long result = new Double(random).longValue();
        String nextNo = String.valueOf(result);
        return nextNo;
    }



    @Override
    public String offer() {
        try {
            return queue.take();
        } catch (InterruptedException e) {
            logger.error(e.getMessage(), e);
        }
        return null;
    }


    @Override
    @Scheduled(cron = "* * *  * * ? ")
    public void run() {
        int codeLength = 8;
        doWhile(queue, codeLength);
    }
}
