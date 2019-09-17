import React from 'react';

import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  Scroll,
  NotificationList,
  Notification,
} from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#338b8b" size={20} />
      </Badge>

      <NotificationList>
        <Scroll>
          <Notification unread>
            <p>You have a new appointment for tomorrow!</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>

          <Notification>
            <p>You have a new appointment for tomorrow!</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>

          <Notification>
            <p>You have a new appointment for tomorrow!</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>

          <Notification>
            <p>You have a new appointment for tomorrow!</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>

          <Notification>
            <p>You have a new appointment for tomorrow!</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
